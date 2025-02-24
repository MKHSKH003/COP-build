﻿using COP.Entities;
using COP.Models;

namespace COP.Services.Login
{
    public interface ILoginService
    {
        Models.User Authentication(string username, string password);
        UserSignup Signup(string name, string email, string password);
    }
}
