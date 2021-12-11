# Pydrive:

[PyDrive](https://pythonhosted.org/PyDrive/index.html)

### pydrive.apiattr module[¶](https://pythonhosted.org/PyDrive/pydrive.html#module-pydrive.apiattr)

_class_ `pydrive.apiattr.``ApiAttribute`(_name_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttribute)

Bases: `object`

A data descriptor that sets and returns values.

_class_ `pydrive.apiattr.``ApiAttributeMixin`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttributeMixin)

Bases: `object`

Mixin to initialize required global variables to use ApiAttribute.

_class_ `pydrive.apiattr.``ApiResource`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource)

Bases: `dict`

Super class of all api resources.

Inherits and behaves as a python dictionary to handle api resources. Save clean copy of metadata in self.metadata as a dictionary. Provides changed metadata elements to efficiently update api resources.

`GetChanges`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource.GetChanges)

Returns changed metadata elements to update api resources efficiently.

Returns:

dict – changed metadata elements.

`UpdateMetadata`(_metadata=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource.UpdateMetadata)

Update metadata and mark all of them to be clean.

`auth`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource.auth)

A data descriptor that sets and returns values.

`update`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource.update)

Overwritten method of dictionary.

_class_ `pydrive.apiattr.``ApiResourceList`(_auth=None_, _metadata=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResourceList)

Bases: [`pydrive.apiattr.ApiAttributeMixin`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttributeMixin), [`pydrive.apiattr.ApiResource`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource), `six.Iterator`

Abstract class of all api list resources.

Inherits ApiResource and builds iterator to list any API resource.

`GetList`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResourceList.GetList)

Get list of API resources.

If ‘maxResults’ is not specified, it will automatically iterate through every resources available. Otherwise, it will make API call once and update ‘pageToken’.

Returns:

list – list of API resources.

`Reset`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResourceList.Reset)

Resets current iteration

`metadata`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResourceList.metadata)

A data descriptor that sets and returns values.

### pydrive.auth module[¶](https://pythonhosted.org/PyDrive/pydrive.html#module-pydrive.auth)

_exception_ `pydrive.auth.``AuthError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthError)

Bases: `exceptions.Exception`

Base error for authentication/authorization errors.

_exception_ `pydrive.auth.``AuthenticationError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthenticationError)

Bases: [`pydrive.auth.AuthError`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthError)

General authentication error.

_exception_ `pydrive.auth.``AuthenticationRejected`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthenticationRejected)

Bases: [`pydrive.auth.AuthError`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthError)

User rejected authentication.

`pydrive.auth.``CheckAuth`(_decoratee_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.CheckAuth)

Decorator to check if it requires OAuth2 flow request.

`pydrive.auth.``CheckServiceAuth`(_decoratee_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.CheckServiceAuth)

Decorator to authorize service account.

_class_ `pydrive.auth.``GoogleAuth`(_settings\_file='settings.yaml'_, _http\_timeout=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth)

Bases: [`pydrive.apiattr.ApiAttributeMixin`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttributeMixin), `object`

Wrapper class for oauth2client library in google-api-python-client.

Loads all settings and credentials from one ‘settings.yaml’ file and performs common OAuth2.0 related functionality such as authentication and authorization.

`Auth`(_code_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.Auth)

Authenticate, authorize, and build service.

Parameters:

**code** (_str._) – Code for authentication.

Raises:

AuthenticationError

`Authenticate`(_code_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.Authenticate)

Authenticates given authentication code back from user.

Parameters:

**code** (_str._) – Code for authentication.

Raises:

AuthenticationError

Authorizes and builds service.

Raises:

AuthenticationError

`CLIENT_CONFIGS_LIST` _= \['client\_id', 'client\_secret', 'auth\_uri', 'token\_uri', 'revoke\_uri', 'redirect\_uri']_[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.CLIENT\_CONFIGS\_LIST)

`CommandLineAuth`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.CommandLineAuth)

Authenticate and authorize from user by printing authentication url retrieving authentication code from command-line.

Returns:

str – code returned from commandline.

`DEFAULT_SETTINGS` _= {'save\_credentials': False, 'client\_config\_file': 'client\_secrets.json', 'client\_config\_backend': 'file', 'oauth\_scope': \['https://www.googleapis.com/auth/drive']}_[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.DEFAULT\_SETTINGS)

`GetAuthUrl`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.GetAuthUrl)

Creates authentication url where user visits to grant access.

Returns:

str – Authentication url.

`GetFlow`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.GetFlow)

Gets Flow object from client configuration.

Raises:

InvalidConfigError

`Get_Http_Object`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.Get\_Http\_Object)

Create and authorize an httplib2.Http object. Necessary for thread-safety. :return: The http object to be used in each call. :rtype: httplib2.Http

`LoadClientConfig`(_backend=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadClientConfig)

Loads client configuration according to specified backend.

If you have any specific backend to load client configuration from in mind, don’t use this function and use the corresponding function you want.

Parameters:

**backend** (_str._) – backend to load client configuration from.

Raises:

InvalidConfigError

`LoadClientConfigFile`(_client\_config\_file=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadClientConfigFile)

Loads client configuration file downloaded from APIs console.

Loads client config file from path in settings if not specified.

Parameters:

**client\_config\_file** (_str._) – path of client config file to read.

Raises:

InvalidConfigError

`LoadClientConfigSettings`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadClientConfigSettings)

Loads client configuration from settings file.

Raises:

InvalidConfigError

`LoadCredentials`(_backend=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadCredentials)

Loads credentials or create empty credentials if it doesn’t exist.

Parameters:

**backend** (_str._) – target backend to save credential to.

Raises:

InvalidConfigError

`LoadCredentialsFile`(_credentials\_file=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadCredentialsFile)

Loads credentials or create empty credentials if it doesn’t exist.

Loads credentials file from path in settings if not specified.

Parameters:

**credentials\_file** (_str._) – path of credentials file to read.

Raises:

InvalidConfigError, InvalidCredentialsError

`LoadServiceConfigSettings`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LoadServiceConfigSettings)

Loads client configuration from settings file. :raises: InvalidConfigError

`LocalWebserverAuth`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.LocalWebserverAuth)

Authenticate and authorize from user by creating local web server and retrieving authentication code.

This function is not for web server application. It creates local web server for user from standalone application.

Parameters:

* **host\_name** (_str._) – host name of the local web server.
* **port\_numbers** (_list._) – list of port numbers to be tried to used.

Returns:

str – code returned from local web server

Raises:

AuthenticationRejected, AuthenticationError

`Refresh`()[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.Refresh)

Refreshes the access\_token.

Raises:

RefreshError

`SERVICE_CONFIGS_LIST` _= \['client\_service\_email', 'client\_user\_email', 'client\_pkcs12\_file\_path']_[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.SERVICE\_CONFIGS\_LIST)

`SaveCredentials`(_backend=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.SaveCredentials)

Saves credentials according to specified backend.

If you have any specific credentials backend in mind, don’t use this function and use the corresponding function you want.

Parameters:

**backend** (_str._) – backend to save credentials.

Raises:

InvalidConfigError

`SaveCredentialsFile`(_credentials\_file=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.SaveCredentialsFile)

Saves credentials to the file in JSON format.

Parameters:

**credentials\_file** (_str._) – destination to save file to.

Raises:

InvalidConfigError, InvalidCredentialsError

`ServiceAuth`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.ServiceAuth)

Authenticate and authorize using P12 private key, client id and client email for a Service account. :raises: AuthError, InvalidConfigError

`access_token_expired`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.access\_token\_expired)

Checks if access token doesn’t exist or is expired.

Returns:

bool – True if access token doesn’t exist or is expired.

`auth_method`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.auth\_method)

A data descriptor that sets and returns values.

`client_config`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.client\_config)

A data descriptor that sets and returns values.

`credentials`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.credentials)

A data descriptor that sets and returns values.

`flow`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.flow)

A data descriptor that sets and returns values.

`http`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.http)

A data descriptor that sets and returns values.

`service`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.service)

A data descriptor that sets and returns values.

`settings`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.GoogleAuth.settings)

A data descriptor that sets and returns values.

_exception_ `pydrive.auth.``InvalidCredentialsError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.InvalidCredentialsError)

Bases: `exceptions.IOError`

Error trying to read credentials file.

`pydrive.auth.``LoadAuth`(_decoratee_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.LoadAuth)

Decorator to check if the auth is valid and loads auth if not.

_exception_ `pydrive.auth.``RefreshError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.RefreshError)

Bases: [`pydrive.auth.AuthError`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.auth.AuthError)

Access token refresh error.

### pydrive.drive module[¶](https://pythonhosted.org/PyDrive/pydrive.html#module-pydrive.drive)

_class_ `pydrive.drive.``GoogleDrive`(_auth=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.drive.GoogleDrive)

Bases: [`pydrive.apiattr.ApiAttributeMixin`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttributeMixin), `object`

Main Google Drive class.

`CreateFile`(_metadata=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.drive.GoogleDrive.CreateFile)

Create an instance of GoogleDriveFile with auth of this instance.

This method would not upload a file to GoogleDrive.

Parameters:

**metadata** (_dict._) – file resource to initialize GoogleDriveFile with.

Returns:

pydrive.files.GoogleDriveFile – initialized with auth of this instance.

`GetAbout`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.drive.GoogleDrive.GetAbout)

Return information about the Google Drive of the auth instance.

Returns:

A dictionary of Google Drive information like user, usage, quota etc.

`ListFile`(_param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.drive.GoogleDrive.ListFile)

Create an instance of GoogleDriveFileList with auth of this instance.

This method will not fetch from Files.List().

Parameters:

**param** (_dict._) – parameter to be sent to Files.List().

Returns:

pydrive.files.GoogleDriveFileList – initialized with auth of this instance.

### pydrive.files module[¶](https://pythonhosted.org/PyDrive/pydrive.html#module-pydrive.files)

_exception_ `pydrive.files.``ApiRequestError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.ApiRequestError)

Bases: `exceptions.IOError`

Error while making any API requests.

_exception_ `pydrive.files.``FileNotDownloadableError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.FileNotDownloadableError)

Bases: `exceptions.RuntimeError`

Error trying to download file that is not downloadable.

_exception_ `pydrive.files.``FileNotUploadedError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.FileNotUploadedError)

Bases: `exceptions.RuntimeError`

Error trying to access metadata of file that is not uploaded.

_class_ `pydrive.files.``GoogleDriveFile`(_auth=None_, _metadata=None_, _uploaded=False_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile)

Bases: [`pydrive.apiattr.ApiAttributeMixin`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiAttributeMixin), [`pydrive.apiattr.ApiResource`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResource)

Google Drive File instance.

Inherits ApiResource which inherits dict. Can access and modify metadata like dictionary.

`Delete`(_param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.Delete)

Hard-delete a file.

Parameters:

**param** (_dict._) – additional parameter to file.

Raises:

ApiRequestError

`DeletePermission`(_permission\_id_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.DeletePermission)

Deletes the permission specified by the permission\_id.

Parameters:

**permission\_id** (_str_) – The permission id.

Returns:

True if it succeeds.

Return type:

bool

`FetchContent`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.FetchContent)

Download file’s content from download\_url.

Raises:

ApiRequestError, FileNotUploadedError, FileNotDownloadableError

`FetchMetadata`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.FetchMetadata)

Download file’s metadata from id using Files.get().

Parameters:

**fields** – The fields to include, as one string, each entry separated

by commas, e.g. ‘fields,labels’. :type fields: str

Parameters:

**fetch\_all** (_bool_) – Whether to fetch all fields.

Raises:

ApiRequestError, FileNotUploadedError

`GetContentFile`(_filename_, _mimetype=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.GetContentFile)

Save content of this file as a local file.

Parameters:

* **filename** (_str_) – name of the file to write to.
* **mimetype** (_str_) – mimeType of the file.

Raises:

ApiRequestError, FileNotUploadedError, FileNotDownloadableError

`GetContentString`(_mimetype=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.GetContentString)

Get content of this file as a string.

Returns:

str – utf-8 decoded content of the file

Raises:

ApiRequestError, FileNotUploadedError, FileNotDownloadableError

`GetPermissions`(_\*args_, _\*\*kwargs_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.GetPermissions)

Downloads all permissions from Google Drive, as this information is not downloaded by FetchMetadata by default.

Returns:

A list of the permission objects.

Return type:

object\[]

`InsertPermission`(_new\_permission_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.InsertPermission)

Insert a new permission. Re-fetches all permissions after call.

Parameters:

**new\_permission** – The new permission to insert, please see the

official Google Drive API guide on permissions.insert for details.

Returns:

The permission object.

Return type:

object

`SetContentFile`(_filename_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.SetContentFile)

Set content of this file from a file.

Opens the file specified by this method. Will be read, uploaded, and closed by Upload() method. Sets metadata ‘title’ and ‘mimeType’ automatically if not specified.

Parameters:

**filename** (_str._) – name of the file to be uploaded.

`SetContentString`(_content_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.SetContentString)

Set content of this file to be a string.

Creates io.BytesIO instance of utf-8 encoded string. Sets mimeType to be ‘text/plain’ if not specified.

Parameters:

**content** (_str._) – content of the file in string.

`Trash`(_param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.Trash)

Move a file to the trash.

Raises:

ApiRequestError

`UnTrash`(_param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.UnTrash)

Move a file out of the trash. :param param: Additional parameter to file. :type param: dict. :raises: ApiRequestError

`Upload`(_param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.Upload)

Upload/update file by choosing the most efficient method.

Parameters:

**param** (_dict._) – additional parameter to upload file.

Raises:

ApiRequestError

`content`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.content)

A data descriptor that sets and returns values.

`metadata`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.metadata)

A data descriptor that sets and returns values.

`uploaded`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFile.uploaded)

A data descriptor that sets and returns values.

_class_ `pydrive.files.``GoogleDriveFileList`(_auth=None_, _param=None_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.GoogleDriveFileList)

Bases: [`pydrive.apiattr.ApiResourceList`](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.apiattr.ApiResourceList)

Google Drive FileList instance.

Equivalent to Files.list() in Drive APIs.

`pydrive.files.``LoadMetadata`(_decoratee_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.files.LoadMetadata)

Decorator to check if the file has metadata and fetches it if not.

Raises:

ApiRequestError, FileNotUploadedError

### pydrive.settings module[¶](https://pythonhosted.org/PyDrive/pydrive.html#module-pydrive.settings)

_exception_ `pydrive.settings.``InvalidConfigError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.settings.InvalidConfigError)

Bases: `exceptions.IOError`

Error trying to read client configuration.

`pydrive.settings.``LoadSettingsFile`(_filename='settings.yaml'_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.settings.LoadSettingsFile)

Loads settings file in yaml format given file name.

Parameters:

**filename** (_str._) – path for settings file. ‘settings.yaml’ by default.

Raises:

SettingsError

_exception_ `pydrive.settings.``SettingsError`[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.settings.SettingsError)

Bases: `exceptions.IOError`

Error while loading/saving settings

`pydrive.settings.``ValidateSettings`(_data_)[¶](https://pythonhosted.org/PyDrive/pydrive.html#pydrive.settings.ValidateSettings)

Validates if current settings is valid.

Parameters:

**data** (_dict._) – dictionary containing all settings.

Raises:

InvalidConfigError
