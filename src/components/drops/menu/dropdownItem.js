import React from "react"
import styled from "styled-components"
import { getColor, getRgbColor } from "@/theme"
import Flex from "@/components/templates/flex"
import { TextSmall } from "@/components/typography"

export const ItemContainer = styled(Flex).attrs(props => ({
  as: "li",
  role: "option",
  padding: [1, 4],
  ...props,
}))`
  cursor: ${({ cursor }) => cursor ?? "pointer"};
  opacity: ${({ disabled, selected }) => (selected ? 0.9 : disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: ${props => getColor("borderSecondary")(props)};
  }
  ${({ justDesc, theme }) =>
    justDesc &&
    `
    pointer-events: none;
    border-top: 1px solid ${getColor("borderSecondary")({ theme })};
    & > * {
      color: ${getColor("textLite")({ theme })}
    }
  `}
  ${({ selected, theme }) =>
    selected &&
    `
    background-color: ${
      theme.name === "Dark"
        ? getRgbColor(["green", "khulnasoft"], 0.3)({ theme })
        : getRgbColor(["green", "frostee"])({ theme })
    }
  `}
`

const DropdownItem = ({
  item: { value, label, icon, reverse, disabled, onClick, ...restItem },
  value: selectedValue,
  onItemClick,
  index,
  style,
  ...rest
}) => {
  const selected = selectedValue === value

  const onSelect = event => {
    if (onClick) onClick(event)
    onItemClick(value)
  }

  return (
    <ItemContainer
      data-index={index}
      aria-selected={selected}
      disabled={disabled}
      selected={selected}
      onClick={onSelect}
      {...restItem}
      {...rest}
      style={style}
    >
      {reverse && <TextSmall>{label}</TextSmall>}
      {icon}
      {!reverse && <TextSmall>{label}</TextSmall>}
    </ItemContainer>
  )
}

export default DropdownItem
