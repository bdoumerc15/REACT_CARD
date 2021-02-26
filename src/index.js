import React from "react"
import ReactDOM from "react-dom"
import CommentDetail from "./components/CommentDetail"
import ApprovalCard from "./components/ApprovalCard"
import faker from "faker"
const rootElement = document.querySelector("#root");

const App = props => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    src={faker.image.image()}
                    author="Bladimir Doumerc"
                    date={faker.date.weekday()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    src={faker.image.image()}
                    author="Erika Parra"
                    date={faker.date.weekday()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    src={faker.image.image()}
                    author="Jaziel Valdez"
                    date={faker.date.weekday()}
                    comment={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, rootElement);