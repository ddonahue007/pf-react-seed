import axios from 'axios';

export default axios.create({
  //baseURL: `http://localhost:8080/api`
  baseURL: `http://customer-demo-ddonahue.apps.dtaylordev014.devcluster.openshift.com/api`
});
