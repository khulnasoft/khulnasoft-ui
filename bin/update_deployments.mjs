#!/usr/bin/env node

import axios from 'axios';
import { setupKhulnaSoftAPI } from 'gitlab-api-async-iterator';
import lockfile from '@yarnpkg/lockfile';

const gitlabAPI = setupKhulnaSoftAPI(axios);

const gitlabUIProject = encodeURIComponent('gitlab-org/khulnasoft-ui');

async function ensureEnvironment(project, options) {
  const { name, ...rest } = options;
  const envBase = `/projects/${project}/environments`;
  const { data: envs } = await gitlabAPI.get(envBase, { params: { name } });
  if (envs?.[0]) {
    const currentEnv = envs[0];
    for (const key in rest) {
      if (currentEnv[key] !== rest[key]) {
        console.warn(`Environment ${name} (${currentEnv.id}) needs an update:`);
        const { data } = await gitlabAPI.put(`${envBase}/${currentEnv.id}`, rest);
        return data;
      }
    }
    return currentEnv;
  }

  const { data } = await gitlabAPI.post(envBase, options);
  return data;
}

async function getKhulnaSoftUIVersionFromYarnLock(project, ref = 'master') {
  const { data: file } = await gitlabAPI.get(
    `/projects/${project}/repository/files/yarn.lock/raw`,
    { params: { ref } }
  );
  let json = lockfile.parse(file);
  if (json.type === 'success') {
    for (const [key, value] of Object.entries(json.object)) {
      if (key.startsWith('@khulnasoft/ui')) {
        return value.version;
      }
    }
  }
  return null;
}

async function createDeploymentIfNecessary(envName, version) {
  if (!version) {
    console.warn(`\tCouldn't extract version`);
    return;
  }
  console.warn(`\tFound @khulnasoft/ui@${version}`);

  const tagName = `v${version}`;
  const { data: release } = await gitlabAPI.get(`/projects/${gitlabUIProject}/releases/${tagName}`);
  const sha = release.commit.id;

  const { data: lastDeployment } = await gitlabAPI.get(`/projects/${gitlabUIProject}/deployments`, {
    params: { sort: 'desc', per_page: 1, environment: envName },
  });

  if (lastDeployment?.[0]?.sha === sha) {
    console.warn('\tLast deployment matches SHA');
    return;
  }

  const deployment = await gitlabAPI.post(`/projects/${gitlabUIProject}/deployments`, {
    environment: envName,
    sha,
    ref: 'main',
    tag: false,
    status: 'success',
  });
  console.warn('\tCreated Deployment...');
}

async function updateKhulnaSoftProject() {
  const gitlabProject = encodeURIComponent('gitlab-org/gitlab');
  const envName = 'production/gitlab-org/gitlab';

  console.warn('Updating gitlab-org/gitlab deployment');

  await ensureEnvironment(gitlabUIProject, {
    name: envName,
    external_url: 'https://github.com/khulnasoft/khulnasoft/-/blob/master/package.json',
    tier: 'production',
  });

  console.warn(`\tGet version from lock file`);
  const version = await getKhulnaSoftUIVersionFromYarnLock(gitlabProject);

  await createDeploymentIfNecessary(envName, version);
}

async function updateNPMPackage() {
  const envName = 'production/npm';

  console.warn('Updating npm deployment');

  await ensureEnvironment(gitlabUIProject, {
    name: envName,
    external_url: 'https://www.npmjs.com/package/@khulnasoft/ui',
    tier: 'production',
  });

  console.warn(`\tGet version from NPM `);
  const { data } = await axios.get(`https://registry.npmjs.org/-/package/@khulnasoft/ui/dist-tags`);

  await createDeploymentIfNecessary(envName, data.latest);
}

let failed = false;

try {
  await updateKhulnaSoftProject();
} catch (e) {
  failed = true;
  console.warn('Updating the KhulnaSoft Deployment failed');
  console.warn(e);
}

try {
  await updateNPMPackage();
} catch (e) {
  failed = true;
  console.warn('Updating the npm package Deployment failed');
  console.warn(e);
}

if (failed) {
  process.exitCode = 1;
}
