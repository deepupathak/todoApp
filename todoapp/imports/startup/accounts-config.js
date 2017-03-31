/*----------- Import statement ---------*/

import { Accounts } from 'meteor/accounts-base';

/*----------- config accounts ui -------*/
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});