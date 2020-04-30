import React from 'react';
import ThreeLayout from './components/common/ThreeLayout';

function App(props) {
    return (
        <div>
            <ThreeLayout
                gap={50}
                left={
                    <div style={{border: '1px solid blue'}
                    }>
                        左边栏
                    </div>
                }
                right={
                    <div style={{border: '1px solid blue'}
                    }>
                        右边栏
                    </div>
                }
            >
                <div style={{
                    border: '1px solid red'
                }}>
                    <h1>主区域</h1>
                    <p>121425435</p>
                </div>
            </ThreeLayout>
        </div>
    );
}

export default App;
