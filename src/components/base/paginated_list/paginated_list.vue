<script>
import GlPagination from '../pagination/pagination.vue';
import GlSearchBoxByType from '../search_box_by_type/search_box_by_type.vue';

export default {
  name: 'GlPaginatedList',
  components: {
    GlSearchBoxByType,
    GlPagination,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      required: false,
      default: 10,
    },
    page: {
      type: Number,
      required: false,
      default: 1,
    },
    filterable: {
      type: Boolean,
      required: false,
      default: true,
    },
    itemKey: {
      type: String,
      required: false,
      default: 'id',
    },
    filter: {
      type: [String, Function],
      required: false,
      default: 'id',
    },
    emptyMessage: {
      type: String,
      required: false,
      default: 'There are currently no items in this list.',
    },
    emptySearchMessage: {
      type: String,
      required: false,
      default: 'Sorry, your filter produced no results.',
    },
  },
  data() {
    return {
      pageIndex: this.page,
      queryStr: '',
    };
  },
  computed: {
    filteredList() {
      if (typeof this.filter === 'function') {
        return this.list.filter((listItem) => this.filter(listItem, this.queryStr));
      }
      return this.list.filter((listItem) =>
        listItem[this.filter].toLowerCase().includes(this.queryStr.toLowerCase())
      );
    },
    paginatedList() {
      const offset = (this.pageIndex - 1) * this.perPage;
      return this.filteredList.slice(offset, offset + this.perPage);
    },
    pageInfo() {
      return { perPage: this.perPage, total: this.filterTotal, page: this.pageIndex };
    },
    total() {
      return this.list.length;
    },
    filterTotal() {
      return this.filteredList.length;
    },
    /**
     * Determine if the original list had 0 items
     *
     * @return {Boolean} - If we started with an empty list
     *
     */
    zeroTotal() {
      return this.total === 0;
    },
    /**
     * Determine if our search yields an empty list
     *
     * @return {Boolean} - If we have an empty search list
     *
     */
    zeroSearchResults() {
      return this.total > 0 && this.filterTotal === 0;
    },
    /**
     * Determine if we originally had 0 results or 0 search results
     *
     * @return {Boolean} - If we have an empty search list
     *
     */
    emptyList() {
      return this.zeroTotal || this.zeroSearchResults;
    },
  },
  watch: {
    /**
     * In KhulnaSoft UI storybook, when a user changes the page knob,
     * we update the current page index.
     *
     * @param {Number}  newPage - A string param
     * @return {undefined} - Nothing is returned
     *
     */
    page(newPage) {
      this.pageIndex = newPage;
    },
    /**
     * In KhulnaSoft UI storybook, when a user changes the perPage knob,
     * we reset the paginated list to the first page.
     *
     * @return {undefined} - Nothing is returned
     *
     */
    perPage() {
      this.pageIndex = 1;
    },
  },
  methods: {
    change(page) {
      this.pageIndex = page;
    },
    query(queryStr) {
      this.pageIndex = 1;
      this.queryStr = queryStr;
    },
  },
};
</script>

<template>
  <div>
    <div class="gl-flex-row-reverse gl-justify-between sm:gl-flex">
      <slot name="header"></slot>
      <gl-search-box-by-type v-if="filterable" @input="query" />
    </div>

    <slot name="subheader"></slot>

    <ul
      class="gl-m-0 gl-grid gl-list-none gl-grid-cols-1 gl-divide-x-0 gl-divide-y gl-divide-solid gl-divide-default gl-p-0"
    >
      <li v-for="listItem in paginatedList" :key="listItem[itemKey]" class="gl-px-5 gl-py-4">
        <slot :list-item="listItem" :query="queryStr">{{ listItem.id }}</slot>
      </li>
    </ul>

    <gl-pagination
      v-if="!emptyList"
      align="center"
      :per-page="pageInfo.perPage"
      v-bind="$attrs"
      :value="pageInfo.page"
      :total-items="pageInfo.total"
      @input="change"
    />
    <!-- Prettier will insert extra line-break which will result in render differences between Vue.js 2 and Vue.js 3 -->
    <!-- See https://github.com/khulnasoft/khulnasoft-ui/-/issues/2004 for details -->
    <!-- display: inline -->
    <div
      v-if="emptyList"
      class="bs-callout bs-callout-warning empty-message gl-mt-5"
      :class="{ 'empty-message': zeroTotal, 'empty-search': zeroSearchResults }"
      >{{ zeroTotal ? emptyMessage : emptySearchMessage }}</div
    >
  </div>
</template>
