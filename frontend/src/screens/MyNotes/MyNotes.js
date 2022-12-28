import { Accordion, Badge, Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import React from "react";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome to Notezipper">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Card style={{ margin: 10 }}>
          <Accordion>
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header> */}
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontsize: 18,
                    fontWeight: 400,
                  }}
                >
                  {note.title}
                </span>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => {
                    deleteHandler(note._id);
                    console.log(note._id);
                  }}
                >
                  Delete
                </Button>
              </Card.Header>
              {/* </Accordion.Header> */}

              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge bg="success">category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
