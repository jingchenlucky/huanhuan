import store from './index';
import { fetchUsers } from './action/usersAction';
store.dispatch(fetchUsers()).then(()=>{console.log("加载完成");});
// import {
//   createSetUsersAction,
//   createSetLoadingAction,
// } from './action/usersAction';
// import { getAllStudents } from '../services/student';
// import { v4 as uuidv4 } from 'uuid';

// // const action = createSetUsersAction([
// //   { id: uuidv4(), loginId: 'admin1', loginName: 'aaa' },
// //   { id: uuidv4(), loginId: 'admin2', loginName: 'bbbb' },
// // ]);
// // store.dispatch(action);

// store.dispatch(createSetLoadingAction(true));
// getAllStudents().then(resp => {
//   const action = createSetUsersAction(resp);
//   store.dispatch(action);
//   store.dispatch(createSetLoadingAction(false));
// });
