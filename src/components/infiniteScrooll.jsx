import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    margin: 6,
    padding: 8
};

class InfiniteOne extends React.Component {
    state = {
        items: Array.from({ length: 20 }),
        hasMore: true
    };

    fetchMoreData = () => {
        if (this.state.items.length >= 500) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 1000);
    };

    render() {
        return (
            <div style={{ border: "10px solid #800000", padding: "10px", width: "45%", height: "400px", margin: "auto", borderRadius: "10px"}}>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    height={400}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            Masai student {index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default InfiniteOne
