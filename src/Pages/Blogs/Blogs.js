import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center m-3">Questions & Answers</h1>
      <Accordion className="p-3" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item className="mb-3" eventKey="0">
          <Accordion.Header>
            1. Difference between JavaScript and Node JS ?{" "}
          </Accordion.Header>
          <Accordion.Body>
            The key differences between JavaScript and Node JS are: <br />
            1. JavaScript is a simple programming language that runs in any
            browser JavaScript Engine. Whereas Node JS is an interpreter or
            running environment for a JavaScript programming language that holds
            many excesses, it requires libraries that can easily be accessed
            from JavaScript programming for better use.
            <br />
            2. JavaScript is normally used for any client-side activity for one
            web application. An activity can be addressing business validation
            or dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
            <br />
            3. JavaScript running in any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
            programming is very easy to write, and put any running environment
            means proper browser. Whereas Node JS only support the V8 engine,
            which googles chrome specific. But whether it supports the V8
            engine, written JavaScript code can able to run in any environment.
            So there has no browser-specific constraint on it.
            <br />
            4. For accessing any operating system, specific non-blocking task
            JavaScript has some specific object, but all of them are operating
            system specific. An example is ActiveX Control which is only running
            in Windows. But Node JS is given utility to run some operating
            system specific non-blocking tasks from any JavaScript programming.
            It doesn’t have any operating system specific constant. Node JS is
            very much familiar to create a specific binding with the file system
            and allows the developer to read or sometimes write on disk.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mb-3" eventKey="1">
          <Accordion.Header>
            2. When should you use Nodejs and when should you use Mongodb ?{" "}
          </Accordion.Header>
          <Accordion.Body>
            Nodejs is an open source server environment which uses JavaScript on
            the server to develop backend applications. So when we need to
            develop backend application, we should use Nodejs. <br />
            On the otherhand, MongoDB is an open source database management
            system (DBMS) that uses a document-oriented database model which
            supports various forms of data. We need to connect our Mongodb
            database to the Server means Nodejs. <br />
            So, if we work in database we use Mongodb and when Mongodb sent to
            server, we use Nodejs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Differences between Sql and NoSql databases ?{" "}
          </Accordion.Header>
          <Accordion.Body>
            The five differences between SQL vs NoSQL are: <br />
            1. SQL databases are relational, NoSQL databases are non-relational.{" "}
            <br />
            2. SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
            <br />
            3. SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br />
            4. SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. <br />
            5. SQL databases are better for multi-row transactions, while NoSQL
            is better for unstructured data like documents or JSON. <br />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
