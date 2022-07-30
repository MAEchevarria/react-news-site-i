import { Container, Row, Col } from 'react-bootstrap'

function ArticleTeaser({ id, title, date, handleClick }) {
  // display <a {title} onClick={ props.handleTitleClick(props.id)} /a>
  // onClick={() => handleTitleClick() }
  // <p>{ props.created_date }</p>
  // console.log(`Article# ${ id } is ${ title }`)
  return (
    <Container>
      <hr />
      <Row>
        <Col lg='8'><h2 onClick={() => handleClick(id)}>{title}</h2></Col>
        <Col lg='4'><p>{date}</p></Col>
      </Row>
    </Container>
  )
}

export default ArticleTeaser;
