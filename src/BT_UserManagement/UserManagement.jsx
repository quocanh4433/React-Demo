import React, { Component } from "react";
import UserForm from "./UserForm";
import { UserList } from "./UserList";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Khai",
          lastname: "Dan",
          email: "dan@gmail",
          address: "Q7",
          dateOfBirth: "01/12/1996",
        },
        {
          id: 2,
          firstname: "Doan",
          lastname: "Vu",
          email: "vu@gmail",
          address: "BT",
          dateOfBirth: "23/09/1994",
        },
      ],

      // updatedUser: lưu trữ thông tin user muốn cập nhật và truyền xuống cho component UserForm
      updateUser: {},
    };
  }

  handleSubmit = (user, type) => {
    if (type === "add") {
      this.setState((state) => ({
        users: [...state.users, user],
      }));
    }
    if (type === "update") {
      const users = this.state.users.map((item) => {
        // Duyệt mảng và kiểm tra phần tử trong mảng có id trùng với id của user muốn cập nhật => return về object user muốn cập nhật
        if (item.id === user.id) {
          return user;
        }
        return item;
      });
      this.setState({ users, updateUser: {} });
    }
  };

  handleDelete = (userId) => {
    console.log(userId);
    const users = this.state.users.filter((user) => user.id !== userId);
    this.setState({ users });
  };

  handleUpdate = (user) => {
    console.log(user);
    this.setState({ updateUser: user });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        {/* khi prop key thay đổi giá trị, react sẽ hủy và tạo mới lại component */}
        <UserForm
          key={this.state.updateUser.id}
          onSubmit={this.handleSubmit}
          user={this.state.updateUser}
        />
        <UserList
          users={this.state.users}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
