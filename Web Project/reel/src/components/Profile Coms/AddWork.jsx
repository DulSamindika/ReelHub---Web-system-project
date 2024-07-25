import React , {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function AddWork() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [filmtitle, setFilmTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [genre, setGenre] = useState("");
  //const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [portfolioId, setPortfolioId] = useState(""); // Add this if you have a way to select portfolio

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", filmtitle);
    formData.append("summary", summary);
    formData.append("genre", genre);
    formData.append("videoFile", videoFile);
    formData.append("coverImage", coverImage);
    formData.append("portfolioId", portfolioId);

    try {
      // Submit portfolio project
      const portfolioResponse = await axios.post("http://localhost:5000/addPortfolio", {
        title,
        description,
      });

      // Assuming you have the portfolioId now
      const portfolioId = portfolioResponse.data._id;
      formData.append("portfolioId", portfolioId);

      // Submit shortfilm
      await axios.post("http://localhost:5000/Shortfilm", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Project and shortfilm added successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error adding the project and shortfilm.");
    }
  };


  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Add Your Projects</h2>

      <Container style={{ maxWidth: "700px" }}>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="formGridTitle">
              <Form.Label>Title Of the Project</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridContent">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridContent">
              <Form.Label>Your Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add contect"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Container style={{ maxWidth: "700px" }}>
            <h4 style={{ textAlign: "left", margin: "20px" }}>Add Movie</h4>

            <Form.Group controlId="formGridContent">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Title"
                value={filmtitle}
                onChange={(e) => setFilmTitle(e.target.value[0])}
              />
            </Form.Group>

            <Form.Group controlId="formGridContent">
              <Form.Label>Summery</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add movie summery around 30 words."
                value={summary}
                onChange={(e) => setSummary(e.target.value[0])}
              />
            </Form.Group>
            
            <Form.Group controlId="formGridContent">
              <Form.Label>Select Genre</Form.Label>
            <Form.Select
              aria-label="Select Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
            </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Video</Form.Label>
              <Form.Control type="file" multiple onChange={(e) => setVideoFile(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Cover Image</Form.Label>
              <Form.Control type="file" multiple onChange={(e) => setCoverImage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="radio" label="Add to gallery" />
            </Form.Group>
          </Container>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
