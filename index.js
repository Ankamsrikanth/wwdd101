<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> -->

    <title>Registration Form</title>
    <style>
        input#name:invalid:focus{
            border:1px solid red
        }
        input#email:invalid:focus{
            border:1px solid red
        }

    </style>
</head>
<body>

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-gray-50">
    <div class="relative bg-white px-6 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:mx-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
            <h2 class="text-3xl text-center font-bold leading-tight">
                Registration Form
            </h2>
            <form id="user-form">
                <div class="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">

                    <!-- name -->
                    <label for="name" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                        Name
                    </label>
                    <input required type="text" id="name" name="name"
                           class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 md-5 text-base leading-6 placeholder-gray-500"
                           placeholder="Enter full name">
                    <br>

                    <!-- email -->
                    <label for="email" class="text-md w-40 inline-block font-medium leading text-gray-700">
                        Email
                    </label>
                    <input type="email" id="email" name="email"
                           class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 md-5 text-base leading-6 placeholder-gray-500"
                           placeholder="Enter the Email">
                    <br>

                    <!-- password -->
                    <label for="password" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <input required type="password" id="password" name="password"
                           class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 md-5 text-base leading-6 placeholder-gray-500"
                           placeholder="Enter password">
                    <br>

                    <!-- dob -->
                    <label for="dob" class="text-md w-40 inline-block font-medium leading-5 text-gray-700">
                        Date of Birth
                    </label>
                    <input type="date" id="dob" name="dob"
                           class="bg-gray-100 inline-block rounded-lg shadow-md px-4 py-3 md-5 text-base leading-6 placeholder-gray-500"
                           placeholder="Enter full name">
                    <br>
                    
                    <div class="flex justify-start gap-3 inline-block align-middle">
                        
                        <input type="checkbox" id="acceptTerms" name="acceptTerms"
                                class="bg-gray-100 inline-block rounded-lg shadow-md px-4 mr py-3 mb-5 text-base leading-6 placeholder-grey-500"
                        >
                        <label for="acceptTerms">Accept Terms & Conditions</label>
    
                    </div>
                    <button type="submit" class=" flex w-fit grid justify-self-center rounded-lg shadow-lg px-8 py-4 bg-green-500 text-white hover:bg-green-400 focus:outline-none ">Submit</button>

                </div>
            </form>
        </div>
    </div>
    <div class="relative bg-white px-6 mt-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
        <div class="mx-auto">
            <h2 class="text-3xl text-center font-bold leading-tight">Entries</h2>
            <div class="divide-y divide-gray-300/50 " id="user-entries"></div>
        </div>
    </div>
</div>
    
    <script src="./script.js"></script>
</body>
</html>
