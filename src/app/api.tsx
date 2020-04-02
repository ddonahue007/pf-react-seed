import axios from 'axios';

export default axios.create({
  //baseURL: `http://localhost:8080/api`
  baseURL: `http://customer-demo-ddonahue.apps.jai-0402.devcluster.openshift.com/api`
});
