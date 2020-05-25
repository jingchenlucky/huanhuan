import React, {Component} from 'react';
import ValidationComp, {A, B} from './ValidationComp'
import Comp from './Comp'

class App extends Component {
    state = {}

    render() {
        return (
            <ValidationComp
                a={123}
                b={true}
                c={true}
                e={<p>ract元素。。</p>}
                d={[1, 2, 3, 4]}
                F={Comp}
                g={new B()}
                sex={'男'}
                h={[11, 22, 33, 44]}
                i={{
                    a: 1,
                    b: 2
                }}
                j={{
                    good: 'play',
                    name: 'huanhuan',
                    age: 17,
                    address: {
                        provice: 'zhejiang',
                        city: 'hangzhou'
                    }
                }}
                k={[{
                    name: 'gg',
                    age: 10
                }]}
                score={88}
            />
        )

    }
}

export default App;
