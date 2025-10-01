### :smile: Usage

```js
import { DragAndDropFileInput } from "react-bocombbm-components";
```

### Properties
- `progressBar` - Set the mode of the component upload
- `uploadMultipleFiles` - Set multiple file or not in drag
- `filesUploaded` - Set number of file upload when this file uploaded. OBS: It need to be informed everytime who "uploadMultipleFiles" are true.
- `acceptedOneFileType` - Set One file extension valid
- `acceptedFileTypes` - Defines the extensions permitted. _Example: ".png, .jpeg, .pdf"_
- `labels` - An object defining the labels that the component will render with. Accepts 6 props **(title, mainMessage, placeholder, button, dragginValue, excededSize)**, all strings.
- `spacing` - An object defining the margins that the component will render with. Accepts 4 props **(top, bottom, left, right)** with 9 possible values each **(none, xxxs, xxs, xs, s, m, l, xl, xxl, xxxl)**
- `loading` - Set loading call api
- `fileMaxBytesSize` - Sets the maximum file size by Bytes
- `isValid` - Will validate if the component has files or if the files respects the maximum size limit
- `handleInputFiles` - Will be called when adding or deleting a file
- `openToastr` - component received by element father

### Callback

- `files` - This property returns after the "drag file" as the first property of the "handleInputFiles" function. It will be a LIST with one file or several files, depending on whether the "uploadMultipleFiles" property is chosen as true.

- `OneFile` - This function returns after the "drag file" as the second property of the "handleInputFiles" function if the "progressBar" mode is chosen. In the first call, this function needs to receive the property "firstCall = true". It needs to be called before and after the API request and given the "status" property to adapt the feedback and the "fileLoaging" property to update the progress bar when called after the result of the API request. 

Ex: **(fileLoaging = true | false, { status = 200 | 400..., toastR = true | false, message = "messageToast", toastRMode = "warning" | "error"(success mode have seted by default) }, firstCall = true | false)**

### Store

- `CalledAPI`- This property needs to be seted as "false" in the project store everytime who the API request end if the "progressBar" property is chosen as true.

Ex: **...store.setState({ calledAPI: false });**