
function userheader(){
const role=localStorage.getItem('role');
const first_name=localStorage.getItem('first_name');
const last_name=localStorage.getItem('last_name');
const id=localStorage.getItem('id');
return (
  <><header aria-label="Page Header">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome {first_name}, {last_name}!
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">
            Perform you function clearly 🎉
          </p>
        </div>

      </div></div></header>
   </> )
}
export default userheader