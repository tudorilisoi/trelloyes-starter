import React from 'react'
import pt from 'prop-types'
import List from './List'
class App extends React.Component {

    static propTypes = {
        store: pt.object.isRequired
    }

    render() {
        // const store =  this.props.store
        const { store } = this.props

        const listsProps = store.lists.map(listInfo => {
            return {
                header: listInfo.header,
                cards: listInfo.cardIds.map(id => store.allCards[id])
            }
        })
        console.log(`listsprops:`, listsProps)

        const lists = listsProps.map((p,index) => <List key={index} {...p} />)

        return (
            <main class="App">
                <header class="App-header">
                    <h1>Trelloyes!</h1>
                </header>
                <div class="App-list">
                    {lists}
                </div>
            </main>
        )
    }
}
export default App