export default {
  AddFile: (fileName)=>({
    type: 'ADD_FILE',
    fileName
  }),
  RemoveFile: (fileId)=>({
    type: 'REMOVE_FILE',
    fileId
  })
};
