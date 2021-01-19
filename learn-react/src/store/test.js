import store from './index';
// import { change } from './action/student/searchCondition';
// import { setIsLoading } from './action/student/searchResult';
import { fetchStudents } from './action/student/searchResult';
// store.dispatch(change({ key: '12313', page: 2 }));
// store.dispatch(setIsLoading(true));
store.dispatch(fetchStudents(store.getState().students.condition));
