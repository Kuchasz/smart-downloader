export default {
  AddFile: (fileName)=>({
    type: 'ADD_FILE',
    fileName
  }),
  UpdateFiles: ()=>({
    type: 'UPDATE_FILES'
  }),
  RemoveFile: (fileId)=>({
    type: 'REMOVE_FILE',
    fileId
  })
};
