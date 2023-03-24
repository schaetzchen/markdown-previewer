import {marked} from 'marked';
import React from "react";
import PropTypes from "prop-types";

export const Previewer = (props: { content: string }) => {
    return (
        <div className="editor">
            <header className="editor__header">
                <h2 className="editor__title">
                    Previewer
                </h2>
            </header>
            <div
                id="preview"
                className="editor__preview"
                dangerouslySetInnerHTML={{__html: marked.parse(props.content, {breaks: true})}}
            />
        </div>
    );
}

Previewer.propTypes = {
    content: PropTypes.string.isRequired
}