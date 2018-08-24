import createFolder from './create-folder';
import createCollection from './create-collection';
import createText from './create-text';
import deleteResource from './delete-resource';
import download from './download';
import upload from './upload';
import rename from './rename';
import sort from './sort';

const capabilities = [
  createCollection,
  createFolder,
  createText,
  rename,
  download,
  upload,
  deleteResource,
  sort
];

/**
 * Actions' fields list:
 *  showDialog,
 *  hideDialog,
 *  navigateToDir,
 *  updateNotifications,
 *  getSelection,
 *  getSelectedResources,
 *  getResource,
 *  getResourceChildren,
 *  getResourceLocation,
 *  getNotifications,
 *  getSortState
 *
 *  Called from FileNavigator (componentDidMount() and componentWillReceiveProps())
 *
 * @param apiOptions
 * @param {object} actions
 * @returns {array}
 */
export default (apiOptions, actions) => (
  capabilities.map(capability => capability(apiOptions, actions))
);
