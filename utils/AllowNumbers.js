import React, { Component } from "react";

class AllowNumbers extends Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    replaceExceptNums(e) {
        this.setState( { inputvalue: e.target.value.replace(/\D/g, '')});
    }

    render() {
        return (
          <div class="numeric-input-holder">
            <input
              type="text"
              value={this.state.inputvalue}
              onChange={this.replaceExceptNums.bind(this)}
              placeholder="min takipçi sayısı"
              maxLength={6} />
          </div>
        );
    }
}

export default AllowNumbers;