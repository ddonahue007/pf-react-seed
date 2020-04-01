import axios from 'axios';

export default axios.create({
//   baseURL: `http://localhost:8080/api`
  baseURL: `https://console-openshift-console.apps.jai-0401.devcluster.openshift.com/api`
});
