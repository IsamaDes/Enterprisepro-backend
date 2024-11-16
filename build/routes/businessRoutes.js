"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessController_1 = require("../controllers/businessController");
const router = (0, express_1.Router)();
router.post('/create', businessController_1.createBusiness);
router.get('/:id', businessController_1.getBusiness);
router.patch('/:id', businessController_1.updateBusiness);
router.delete('/:id', businessController_1.deleteBusiness);
exports.default = router;
