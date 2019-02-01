import * as React from "react";
import {Header} from './Header';
import SearchForm from './searchForm/Wrapper';

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (     
            <div>
                <Header />
                <SearchForm />
            </div>
        );
    }
}

