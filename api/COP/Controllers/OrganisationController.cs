﻿using COP.Entities;
using COP.Models;
using COP.Services.Organisation;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace COP.Controllers
{
    [Route("api/organisation")]
    [ApiController]
    public class OrganisationController : ControllerBase
    {
        private readonly IOrganisationService _organisationService;
        public OrganisationController(IOrganisationService organisationService)
        {
            _organisationService = organisationService;
        }

        [HttpGet]
        public IEnumerable<Entities.Organisation> Get()
        {
            return _organisationService.Get();
        }
        [HttpPost("add-organisation")]
        public ActionResult<Entities.Organisation> AddOrganisation(Models.Organisation organisation)
        {
            return _organisationService.AddOrganisation(organisation);
        }

    }
}
