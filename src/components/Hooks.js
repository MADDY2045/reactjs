import React from 'react';
import UseStateSample from '../components/useStateSample';
import UseEffectSample from '../components/useEffectSample';
import UseRef from '../components/useRefSample';
import UseMemo from '../components/useMemoSample'
import { Route,Switch } from 'react-router-dom'
const Hooks = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={UseStateSample}/>
                <Route exact path="/useeffect" component={UseEffectSample}/>
                <Route exact path='/useref' component={UseRef}/>
                <Route exact path='/usememo' component={UseMemo}/>
            </Switch>
        </div>
    );
}

export default Hooks;
