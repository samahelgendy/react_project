import React , {Component} from "react";
import './style.css'

class SocialMedia extends Component{
    render() {
        return (
             <div className="social-media">
            
            <div className="social face">
            <i class="icon fa fa-chain fa-2x"></i>

                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                  <i class="icon fa fa-chain fa-2x"></i>

                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
              <i class="icon fa fa-chain fa-2x"></i>

                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
        )
    }
}

export default SocialMedia;