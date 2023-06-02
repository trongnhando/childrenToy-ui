import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "./validations";
import { InputInsertType } from "../common/types";
import { Input } from "../../../Common/Input/input";
import { RoleNumber } from "../common/constants";
import { callApi } from "../../../../api/callApi/callApi";
import { Loader } from "../../../Common/Loader/loader";

export const AddNewUser = () => {
   const navigate = useNavigate();
   const [showLoading, setShowLoading] = useState(false);
   const initValues = {
      username: "",
      password: "",
      confirmPwd: "",
      role: 1,
   };

   const onSubmit = async (formikValues: InputInsertType) => {
      if (
         formikValues.password &&
         formikValues.confirmPwd &&
         formikValues.password !== formikValues.confirmPwd
      ) {
         formikBag.setFieldError(
            "confirmPwd",
            "Confirm password not matched with password"
         );
         return "";
      }

      setShowLoading(true);
      const requestPayload = {
         ...formikValues,
      };
      const response = await callApi("users", "post", requestPayload).catch(
         (err) => console.log({ err })
      );
      setShowLoading(false);
      if (response) {
         alert("Insert new account success");
         navigate(-1);
      } else {
         alert("Insert new account fail");
      }
   };

   const formikBag = useFormik({
      initialValues: initValues,
      validationSchema,
      onSubmit,
   });

   const handleSubmit = useCallback(() => {
      try {
         formikBag.submitForm();
      } catch (error) {
         console.log({ error });
      }
   }, [formikBag]);

   return (
      <div>
         {showLoading ? (
            <Loader />
         ) : (
            <form onSubmit={formikBag.handleSubmit}>
               <div className="div-register dark:bg-gray-700">
                  <form onSubmit={formikBag.handleSubmit}>
                     <div className="mb-6">
                        <div className="text-3xl font-bold text-center text-slate-100">
                           INSERT NEW ACCOUNT
                        </div>
                     </div>
                     <div className="mb-6">
                        <Input
                           label="Username:"
                           name="username"
                           id="username"
                           type="text"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           onChange={formikBag.handleChange}
                           value={formikBag.values.username || ""}
                        />
                        {formikBag.errors.username &&
                           formikBag.touched.username && (
                              <p className="text-orange-600">
                                 {formikBag.errors.username}
                              </p>
                           )}
                     </div>
                     <div className="mb-6">
                        <Input
                           label="Password:"
                           name="password"
                           id="password"
                           type="password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           onChange={formikBag.handleChange}
                           value={formikBag.values.password || ""}
                        />
                        {formikBag.errors.password &&
                           formikBag.touched.password && (
                              <p className="text-orange-600">
                                 {formikBag.errors.password}
                              </p>
                           )}
                     </div>
                     <div className="mb-6">
                        <Input
                           label="Confirm Password:"
                           name="confirmPwd"
                           id="confirmPwd"
                           type="password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           onChange={formikBag.handleChange}
                           value={formikBag.values.confirmPwd || ""}
                        />
                        {formikBag.errors.confirmPwd &&
                           formikBag.touched.confirmPwd && (
                              <p className="text-orange-600">
                                 {formikBag.errors.confirmPwd}
                              </p>
                           )}
                     </div>
                     <div className="mb-6">
                        <select
                           id="role"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-base"
                           onChange={formikBag.handleChange}
                           value={formikBag.values.role}
                        >
                           <option value={RoleNumber.User}>User</option>
                           <option value={RoleNumber.Employee}>Employee</option>
                           <option value={RoleNumber.Admin}>Admin</option>
                        </select>
                        {formikBag.errors.role && formikBag.touched.role && (
                           <p className="text-orange-600">
                              {formikBag.errors.role}
                           </p>
                        )}
                     </div>
                     <div className="grid gap-6 mb-1 md:grid-cols-2">
                        <div>
                           <button
                              type="button"
                              onClick={handleSubmit}
                              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
                           >
                              Submit
                           </button>
                        </div>
                        <div>
                           <button
                              type="button"
                              onClick={() => navigate(-1)}
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100"
                           >
                              Back
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </form>
         )}
      </div>
   );
};