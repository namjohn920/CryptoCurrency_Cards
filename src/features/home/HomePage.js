import React, { Component } from 'react'
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'
import { getCoinData } from '../../app/actions/coinActions'
import Pagination from 'react-paginating';

const styles = {

}

const mapState = (state, ownProps) => {
    return {
        coinData: state.coinReducer.coinData,
        loading: state.asyncReducer.loading
    };
};

const actions = {
    getCoinData
};

class HomePage extends Component {
    state = {
        currentPage: 1,
        start: 0,
        end: 4,
    }
    async componentDidMount() {
        await this.props.getCoinData();
        console.log(this.props.coinData)
        console.log(this.props.loading)

    }

    handlePageChange = (page, e) => {
        let theStart = (page - 1) * 4;
        let theEnd = page * 4;

        this.setState({
            currentPage: page,
            start: theStart,
            end: theEnd,
        });
    }

    render() {
        const { loading, coinData } = this.props;
        const { start, end, currentPage } = this.state

        const limit = 4;
        const pageCount = 6;

        var coinArray = [];

        Object.keys(coinData).map((keyName, i) => {

            let coin = [keyName, coinData[keyName]]
            coinArray.push(coin)
        })

        const total = coinArray.length

        return (
            <React.Fragment>
                <h1>Cryptocurrency Dashboard</h1>

                <div>
                    {loading && loading ?
                        <CircularProgress />
                        :
                        <div>
                            {coinArray.length >= 1 && coinArray.slice(start, end).map(coin => (
                                <div>
                                    <p>
                                        <strong>CoinName</strong>: {coin[0]}
                                    </p>
                                    <p>
                                        <strong>Price</strong>: {coin[1]}
                                    </p>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    }
                    <Pagination
                        total={total}
                        limit={limit}
                        pageCount={pageCount}
                        currentPage={currentPage}
                    >
                        {({
                            pages,
                            currentPage,
                            hasNextPage,
                            hasPreviousPage,
                            previousPage,
                            nextPage,
                            totalPages,
                            getPageItemProps
                        }) => (
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <button
                                        {...getPageItemProps({
                                            pageValue: 1,
                                            onPageChange: this.handlePageChange,

                                        })}
                                    >
                                        first
                                </button>

                                    {hasPreviousPage && (
                                        <button
                                            {...getPageItemProps({
                                                pageValue: previousPage,
                                                onPageChange: this.handlePageChange,

                                            })}
                                        >
                                            {"<"}
                                        </button>
                                    )}

                                    {pages.map(page => {
                                        let activePage = null;
                                        if (currentPage === page) {
                                            activePage = { backgroundColor: "#4ca7ab", color: 'white' };
                                        }
                                        return (
                                            <button
                                                {...getPageItemProps({
                                                    pageValue: page,
                                                    key: page,
                                                    style: activePage,
                                                    onPageChange: this.handlePageChange,
                                                })}
                                            >
                                                {page}
                                            </button>
                                        );
                                    })}

                                    {hasNextPage && (
                                        <button
                                            {...getPageItemProps({
                                                pageValue: nextPage,
                                                onPageChange: this.handlePageChange,

                                            })}
                                        >
                                            {">"}
                                        </button>
                                    )}

                                    <button
                                        {...getPageItemProps({
                                            pageValue: totalPages,
                                            onPageChange: this.handlePageChange,

                                        })}
                                    >
                                        last
                                </button>
                                </div>
                            )}
                    </Pagination>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(connect(mapState, actions)(HomePage))
