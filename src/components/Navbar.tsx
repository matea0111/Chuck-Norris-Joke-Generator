import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';



const Navbar: React.FC = () => {

    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href={"/"}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={"/saved"}>Saved Jokes</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
        </Card>
    );
};

export default Navbar;