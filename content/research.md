We develop and analyze efficient numerical methods for partial differential equations, combining numerical analysis and scientific machine learning to study nonlocal interactions, reduced fluid models, and kinetic equations.
Across these areas, our goal is to reduce computational cost while retaining the mathematical and physical structure needed for reliable simulation.

## Nonlocal modeling and simulation

Nonlocal models describe interactions over finite or long distances, capturing transport that local differential equations may miss.
We develop accurate and efficient approximations for these models, where singular kernels, extended interactions, and boundary constraints pose numerical challenges.
For homogeneous fractional operators, our work includes a spectral method that achieves spectral accuracy for sufficiently smooth functions without requiring periodic boundary conditions, as well as a second-order finite-difference approximation for higher-order fractional Laplacians.
We also study how truncating interaction ranges and regularizing kernels change diffusion behavior and introduce modeling error.

For heterogeneous media, spatially varying fractional orders remove the translation invariance that makes homogeneous operators inexpensive to evaluate.
Our work includes a matrix-free method for variable-order fractional wave equations and ongoing finite-difference methods that approximate variable-order operators by sums of translation-invariant components with spatially varying coefficients, enabling fast Fourier multiplication and parallel evaluation.
Our next steps are to connect solution regularity and order variation to error estimates, guide adaptive refinement, and extend efficient approximation to more complex domains and nonlocal boundary constraints.

![Three comparisons of exact fractional Laplacian values, a standard Fourier pseudospectral approximation, and our spectral approximation.](/research/nonlocal_spectral.png "Fractional Laplacian approximations for three test functions. Our spectral method handles both periodic and nonperiodic functions without imposing artificial periodicity. Select the figure to view it at full size.")

## Shallow water moment models

Shallow water moment models enrich depth-averaged flow equations with a small number of moments that describe vertical variations in horizontal velocity.
We study how these reduced models can represent vertical shear and bottom stresses while retaining hyperbolicity and resolving physical equilibria.
Our effective wall closure uses a bottom-to-mean velocity relation; comparisons with incompressible Navier–Stokes simulations show reduced excessive damping and improved interior velocity profiles in the tested cases.
In recent work, we also construct a rotationally invariant modification of a moment model in two horizontal dimensions and establish global hyperbolicity for positive water depth.

To resolve small disturbances without overwhelming them with numerical imbalance, we develop first- and second-order finite-volume schemes that exactly preserve a prescribed discrete moving equilibrium for quasi-two-dimensional flows.
Our future work will couple velocity and temperature moments to study thermal stratification, investigate hyperbolicity and energy exchange in rotating flows, and develop equilibrium-preserving discretizations for these systems.
For coastal and tsunami applications, we also plan to study nonnegative-depth wetting and drying treatments and non-hydrostatic extensions that account for dispersive effects.

![Depth perturbations from HLL, WB1, and WB2 schemes, alongside depth-error curves under mesh refinement.](/research/sw_wb_perturbation.png "Weak perturbation of a quasi-two-dimensional moving equilibrium: final depth perturbation (left) and depth-component L¹ errors under mesh refinement (right). The non-well-balanced HLL scheme introduces a spurious disturbance; WB1 and WB2 improve perturbation resolution. Errors use a fine-grid WB2 solution as the numerical reference.")

## Structure-preserving kinetic methods

Kinetic equations describe particle distributions beyond macroscopic quantities such as density and temperature.
Our current work develops a deterministic particle method for the spatially homogeneous relativistic Landau equation, where the nonquadratic dependence of relativistic energy on momentum makes conservation especially challenging.
We combine compatible discrete gradients of relativistic energy and regularized entropy with a collision tensor evaluation that respects the discrete energy constraint.
The resulting scheme preserves mass, momentum, and relativistic energy and dissipates the regularized entropy, up to nonlinear-solver and floating-point errors.

The current pairwise collision calculation has quadratic cost in the number of particles.
We plan to investigate tree-based approximations and random-batch techniques that reduce this cost while retaining conservation and entropy dissipation.
We will also extend the method to spatially inhomogeneous relativistic kinetic equations, beginning with electrostatic coupling and progressing toward electromagnetic systems.
The central challenge is to make transport, fields, and collisions compatible at the discrete level so that the full method respects particle–field energy exchange and collisional entropy dissipation.

![Shared-color-scale momentum-space slices of an initial two-beam distribution, its numerical state at time 30, and a Maxwell–Jüttner equilibrium reference.](/research/landau_relaxation.png "Spatially homogeneous two-beam relaxation in three momentum dimensions: initial state, numerical solution at t = 30, and a moment-matched, Gaussian-regularized Maxwell–Jüttner reference. The panels show the same Cartesian slice and logarithmic color scale. This fixed-resolution computation illustrates isotropization and a trend toward equilibrium.")

## Scientific machine learning

We design machine learning models for nonlocal dynamics and kinetic moment closures, using mathematical structure to guide efficient prediction.
Our convolutional reduced-order models learn low-dimensional solution representations and map parameters and time to those representations, including for nonlocal PDEs with singular kernels and nonlocal boundary conditions.
In ongoing work, we also develop CNN time-steppers trained on short solution trajectories without evaluating the nonlocal operator or a PDE residual in the training loss.
Symmetric filters, separate linear and nonlinear components, and problem-dependent boundary padding reflect the structure of the underlying models.

For the Vlasov–Poisson–BGK system, we develop a neural closure that predicts real characteristic-root offsets and maps them algebraically to gradient-closure coefficients.
The resulting transport system is hyperbolic when the roots are distinct and density and temperature are positive; the current architecture does not automatically enforce all of these conditions.
Tests show improved accuracy in several comparisons on common successful trajectories, while the analytical hyperbolic closure completes all simulations, revealing an accuracy–robustness tradeoff.
Our next steps are to enforce root separation, support admissible states numerically, and improve performance across collision regimes and long prediction times, alongside learning interpretable nonlocal operators from data.

![Neural closure diagram linking nonvelocity moment inputs, a trainable network, real characteristic-root offsets, and a fixed algebraic map to gradient-closure coefficients.](/research/vpbgk_network.png "Structure-informed neural closure for Vlasov–Poisson–BGK. The trainable network excludes the mean velocity; a fixed temperature-dependent algebraic map converts real characteristic-root offsets into gradient-closure coefficients. The hidden layers are schematic.")

See [publications](/publications/) and [complete CV](/cv/) for related papers, manuscripts, and presentations.
