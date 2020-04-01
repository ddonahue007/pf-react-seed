import axios from 'axios';

export default axios.create({
  baseURL: `http://0.0.0.0:8080/api`
//   baseURL: `https://console-openshift-console.apps.jai-0401.devcluster.openshift.com/api`
});
