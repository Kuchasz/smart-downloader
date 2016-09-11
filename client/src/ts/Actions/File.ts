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
  }),
  UpdateFileProgress: (fileId: number, fileProgress: number)=>({
    type: 'UPDATE_FILE_PROGRESS',
    fileId,
    fileProgress
  })
};
