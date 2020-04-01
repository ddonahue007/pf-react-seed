import axios from 'axios';

export default axios.create({
  baseURL: `http://192.174.120.10:8080/api`
  //baseURL: `http://customer-demo-ddonahue.apps.dtaylordev012.devcluster.openshift.com/api`
});
