import axios from 'axios';

export default axios.create({
  // baseURL: `http://0.0.0.0:8080/api`
  baseURL: `http://customer-demo-ddonahue.apps.dtaylordev012.devcluster.openshift.com/api`
});
