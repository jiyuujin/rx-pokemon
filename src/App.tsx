import React from 'react'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs'
import { map } from 'rxjs/operators'
import { useObservable } from 'rxjs-hooks'
import './App.css'
import './assets/gallery.css'

import { Search } from './components/Search'
import { CardList } from './components/CardList'

const fetchPokemons = () => {
    return fetch(
        `${process.env.REACT_APP_POKEMON_API}/pokemon?limit=200&offset=200`
    )
        .then((response) => response.json())
        .then((json) => json.results)
}

const useSearch = () =>
    useObservable(
        (word$) =>
            word$.pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(() => fetchPokemons()),
                map((result) => (result !== undefined ? result : []))
            ),
        [],
        []
    )

function App() {
    const data = useSearch()
    const [searchText, setSearchText] = React.useState<string>('')

    const handleInputClick = (newtext: string) => {
        setSearchText(newtext)
    }

    return (
        <div className="App">
            <div className="search">
                <Search text={searchText} setText={handleInputClick} />
            </div>
            <div className="gallery">
                <CardList data={data} search={searchText} />
            </div>
        </div>
    )
}

export default App
