/*global someFunction b:true*/
/*eslint no-undef: "error"*/
import React from "react";
import Enzyme from "enzyme";
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SignUp from '../components/signUp';
import AccountBalanceGet from '../components/AccountBalance';

Enzyme.configure({adapter: new Adapter() });



describe("Sign Up Form Testing", ()=>{
it('Button renders with custom text', () => {
    const wrapper = mount(<SignUp/>);
    const button = wrapper.find('Button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Submit Application');
  });

  it("Sign Up should be rendered", ()=>{
    const wrapper = shallow(<SignUp/>)
    expect(wrapper).toMatchSnapshot();
})

/*it('calls onSubmit prop function when form is submitted', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<SignUp addAccount={onSubmitFn}/>);
    const form = wrapper.find('Button');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });*/

})

    /*describe("<SignUp />", () => {
        let wrapper;
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState")
        useStateSpy.mockImplementation((init) => [init, setState]);

        beforeEach(() => {
            wrapper = Enzyme.mount(Enzyme.shallow(<SignUp />).get(0))
        });

        afterEach(() => {
            jest.clearAllMocks();
        })});

    describe("SSN input", () => {
        let wrapper;
        it("Should capture SSN correctly onChange", () => {
            const title = wrapper.find("input").at(6);
            title.instance().value = "1234";
            title.simulate("change");
            expect(setState).toHaveBeenCalledWith("1234");
        });
    });

    describe("Content input", () => {
        it("Should capture content correctly onChange", () => {
            const content = wrapper.find("input").at(1);
            content.instance().value = "Testing";
            content.simulate("change");
            expect(setState).toHaveBeenCalledWith("Testing");
        });
    });*/