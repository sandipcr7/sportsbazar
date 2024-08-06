<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Company;
use App\Models\FutsalFacility;
use App\Models\Role;
use App\Models\User;
use App\Policies\CompanyPolicy;
use App\Policies\FutsalFacilityPolicy;
use App\Policies\RolePolicy;
use App\Policies\UserPolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //        'App\Models\FutsalFacility' => 'App\Policies\Futsal_facilitiesPolicy',
        //        'App\Models\Company' => 'App\Policies\CompanyPolicy',
        //        'App\Models\Role' => 'App\Policies\RolePolicy',
        //        'App\Models\User' => 'App\Policies\UserPolicy',
        User::class => UserPolicy::class,
        Role::class => RolePolicy::class,
        Company::class => CompanyPolicy::class,
        FutsalFacility::class => FutsalFacilityPolicy::class,

    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
        Model::preventLazyLoading();
        Model::unguard();
    }
}
