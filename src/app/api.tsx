import axios from 'axios';

export default axios.create({
  //baseURL: `http://localhost:8080/api`
  baseURL: `https://console-openshift-console.apps.bpetersen.devcluster.openshift.com/api`
});
