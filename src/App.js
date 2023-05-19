import {Component} from 'react'

import LanguageItem from './components/LanguageItem'

import TabItem from './components/TabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  clickTabItem = id => {
    this.setState({activeTabId: id})
  }

  getFilteredLanguages = () => {
    const {activeTabId} = this.state
    const filteredLanguages = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeTabId,
    )
    return filteredLanguages
  }

  render() {
    const {activeTabId} = this.state
    const filteredLanguages = this.getFilteredLanguages()
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(eachLanguageTab => (
            <TabItem
              key={eachLanguageTab.id}
              tabDetails={eachLanguageTab}
              isActive={activeTabId === eachLanguageTab.id}
              clickTabItem={this.clickTabItem}
            />
          ))}
        </ul>
        {filteredLanguages.map(eachLanguage => (
          <LanguageItem key={eachLanguage.id} languageDetails={eachLanguage} />
        ))}
      </div>
    )
  }
}

export default App
