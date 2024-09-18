import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Modal } from '@mui/material';
import { UserResponseView } from './UserResponseView';
import useAxios from 'utils/axios';
import { HTTP_METHODS, LOADING, QUESTION_ACTION_TYPES, REQUEST_FAILURE_MESSAGES, REQUEST_SUCCESS_MESSAGES, REQUEST_URLS } from "../../utils/constants";
import { useParams } from 'react-router-dom';
import { useDocument } from 'components/contexts/questions-context';

export default function DataTable({documentDet}) {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [viewUserIdResponse, setViewUserIdResponse] = useState("");
  // const [documentDet,setDocumentDet]=useState([])


  // const {  handlePromiseRequest } = useAxios();
  // let { questions, dispatch, currentFocusedQuestionId, documentName,
  //   documentDescription, viewDocument, createdByUserID, user } = useDocument();

  // const loadDocument = async () => {
  //   try {
  //     const document = await HttpRequestController(`${REQUEST_URLS.GET_DOCUMENT}/${params.documentId}`, HTTP_METHODS.GET);
  //     console.log(document,"dddddddddddddddddddddddddddd");
      
  //     if (document) {
  //       dispatch({ type: QUESTION_ACTION_TYPES.DOCUMENT_LOADED, payload: document });
  //       setDocumentDet(document);
  //     } else {
  //       console.log("Document not found");
  //     }
  //   } catch (error) {
  //     console.error("Error loading document:", error);
  //   }
  // };

  // useEffect(() => {
  //   handlePromiseRequest(loadDocument, LOADING, REQUEST_SUCCESS_MESSAGES.QUESTIONS_LOADED_SUCCESSFULLY, REQUEST_FAILURE_MESSAGES.QUESTIONS_LOADING_FAILED);
  // }, [dispatch]);

  // Define columns with questions
  const columns = (documentDet.questions || []).map((question) => ({
    field: question.id, // Use question ID as field name
    headerName: question.question, // Use question text as header name
    flex: 1,
    renderCell: (params) => params.value || 'No answer', // Ensure there is a value or fallback
  }));
console.log(documentDet,"documentDet?.responses");

  // Prepare rows with answers
  const rows = (documentDet?.Responses).map((response) => {
    const row = { id: response.id }; // Ensure each row has a unique id
    (documentDet.questions || []).forEach((question) => {
      row[question.id] = response.answers[question.id] || 'No answer';
    });
    return row;
  });

  console.log("Columns:", columns); // Debugging line
  console.log("Rows:", rows); // Debugging line
  // Open modal with user response details
  const handleOpen = (userId) => {
    setViewUserIdResponse(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ maxHeight: "1000px", display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='response-dialog-box'>
          <UserResponseView userId={viewUserIdResponse} />
        </div>
      </Modal>
    </>
  );
}
