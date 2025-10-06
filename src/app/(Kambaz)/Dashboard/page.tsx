import Link from "next/link";
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#2B579A" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5010 Program Design Paradigms
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5010.MERGED.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#DC3545" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5610 18616 Web Development
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5610.18616.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5500 Software Engineering
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5500.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#28A745" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5800 Algorithms
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5800.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#6F42C1" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5200 Database Management
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5200.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#17A2B8" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5100 AI Foundations
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5100.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <div style={{ height: "160px", background: "#FFC107" }}></div>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5700 Computer Networks
                  </CardTitle>
                  <CardText className="text-muted" style={{ fontSize: "13px" }}>
                    CS5700.202610<br />
                    202610_1 Fall 2025 Semester Full Term
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}