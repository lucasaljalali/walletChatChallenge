import { useState } from 'react'
import {WalletChatWidget} from 'react-wallet-chat-v0'
import 'react-wallet-chat-v0/dist/index.css'
import './App.css'

export default function App() {
  const [widgetState, setWidgetState] = useState({})
  return (
    <div className="mainContainer">
      <h1 className="mainTitle">Lucas Al Jalali`s Challenge</h1>
      <WalletChatWidget widgetState={widgetState}/>
      <div title="Chat With Owner">
        <button
          onClick={() => {
              setWidgetState(
              {
                 ...widgetState, 
                chatAddr: '0x17FA0A61bf1719D12C08c61F211A063a58267A19',
                isOpen: true
              }
            )
            }
          }
        />
      </div>
    </div>
  )
}
