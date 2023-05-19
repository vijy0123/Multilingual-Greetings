import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
