import React from 'react'
import pt from 'prop-types'
class List extends React.Component {
    static propTypes = {
        header: pt.string.isRequired,
        cards: pt.array.isRequired,
    }
    render() {
        return (
            <section class="List">
                        <header class="List-header">
                            <h2>{this.props.header}</h2>
                        </header>
                        <div class="List-cards">
                            <div class="Card">
                                <button type="button">delete</button>
                                <h3>First card</h3>
                                <p>lorem ipsum</p>
                            </div>
                            <div class="Card">
                                <button type="button">delete</button>
                                <h3>TODO replace me with a card component!!</h3>
                                <p>lorem ipsum</p>
                            </div>
                           
                            <button type="button" class="List-add-button">
                                + Add Random Card
                    </button>
                        </div>
                    </section>
        )
    }
}
export default List