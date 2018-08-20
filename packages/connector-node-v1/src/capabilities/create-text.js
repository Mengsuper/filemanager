import api from '../api';
import sanitizeFilename from 'sanitize-filename';
import onFailError from '../utils/onFailError';
import icons from '../icons-svg';
import getMess from '../translations';

import React from 'react';
import RichTextExample from './textEditor/TextEditor';

let label = 'createText';

function handler(apiOptions, actions) {
  const {
    showDialog,
    hideDialog,
    navigateToDir,
    updateNotifications,
    getResource,
    getNotifications
  } = actions;

  const getMessage = getMess.bind(null, apiOptions.locale);

  // may need put notification into editor ==> to do 
  
  showDialog(<RichTextExample onHide={hideDialog}/>);
}

export default (apiOptions, actions) => {
  const localeLabel = getMess(apiOptions.locale, label);
  const { getResource } = actions;
  return {
    id: label,
    icon: { svg: icons.folder },
    label: localeLabel,
    shouldBeAvailable: (apiOptions) => {
      const resource = getResource();

      if (!resource || !resource.capabilities) {
        return false;
      }

      return resource.capabilities.canAddChildren;
    },
    availableInContexts: ['files-view', 'new-button'],
    handler: () => handler(apiOptions, actions)
  };
}
