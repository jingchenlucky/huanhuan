import React, {Component} from 'react';
import Pager from "./Pager";
import StudenList from './StudentList';
import Modal from './Modal'

class PageTest extends Component {
    state = {
        current: 1,
        total: 100,
        limit: 5,
        panelNumber: 5,
        students: [],
        isLoading: false
    }

    constructor(props) {
        super(props);
        this.fetchStudents();
    }

    async fetchStudents() {
        this.setState({
            isLoading: true
        })
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=huanhuan_1564064301241&page=${this.state.current}&size=${this.state.limit}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            isLoading: false
        })
    }

    onPageChange = (newPage) => {
        this.setState({
            current: newPage
        })
        this.fetchStudents();
    }

    render() {
        return (
            <div className="container">
                <StudenList stus={this.state.students}/>
                <div className="pager">
                    <Pager {...this.state} onPageChange={this.onPageChange}/>
                </div>
                <Modal show={this.state.isLoading}/>
            </div>
        );
    }
}

export default PageTest;
